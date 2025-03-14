#!/usr/bin/env python3
import os
import re
from pathlib import Path

def is_config_file(file_path):
    """Determina si un archivo es un archivo de configuración basado en su nombre."""
    config_patterns = [
        r'\.config\.',            # archivos .config.*
        r'config\.',              # archivos config.*
        r'\.rc$',                 # archivos .rc
        r'package\.json$',        # package.json
        r'tsconfig\.json$',       # tsconfig.json
        r'webpack\.config\.js$',  # webpack.config.js
        r'\.env',                 # archivos .env
        r'tailwind\.config\.js$', # tailwind.config.js
        r'vite\.config\.js$',     # vite.config.js
        r'\.eslintrc',            # .eslintrc.*
        r'\.prettierrc',          # .prettierrc.*
        r'babel\.config\.js$',    # babel.config.js
        r'jest\.config\.js$'      # jest.config.js
    ]
    
    file_name = os.path.basename(file_path)
    return any(re.search(pattern, file_name) for pattern in config_patterns)

def should_include_file(file_path):
    """Determina si un archivo debe ser incluido en el resultado."""
    # Lista de archivos específicos a excluir
    excluded_files = [
        'package-lock.json',
        'yarn.lock',
        'pnpm-lock.yaml',
        '.DS_Store',
        'Thumbs.db',
    ]
    
    if os.path.basename(file_path) in excluded_files:
        return False
    
    # Verificar si el archivo está en un directorio excluido
    path_parts = Path(file_path).parts
    excluded_dirs = ['node_modules', '.git', 'build', 'dist', 'scripts/resultados', '.cache', '.next']
    
    # Excluir cualquier ruta que contenga alguno de los directorios excluidos
    for part in path_parts:
        if part in excluded_dirs:
            return False
    
    # También excluir por el path completo
    path_str = str(file_path)
    for excluded_dir in excluded_dirs:
        if f"/{excluded_dir}/" in path_str or path_str.endswith(f"/{excluded_dir}"):
            return False
    
    # Incluir solo extensiones específicas
    ext = file_path.suffix.lower()
    return ext in ['.ts', '.tsx', '.js', '.jsx', '.json', '.html', '.css', '.scss', '.md'] or is_config_file(str(file_path))

def get_file_content(file_path):
    """Obtiene el contenido de un archivo con manejo de errores."""
    # Si el archivo es muy grande (más de 1MB), mostrar solo un mensaje
    if os.path.getsize(file_path) > 1024 * 1024:
        return f"[Archivo muy grande: {os.path.getsize(file_path) / (1024 * 1024):.2f} MB. Contenido no incluido.]"
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return file.read()
    except UnicodeDecodeError:
        try:
            # Intentar con latin-1 si utf-8 falla
            with open(file_path, 'r', encoding='latin-1') as file:
                return file.read()
        except Exception as e:
            return f"[Error leyendo archivo: {str(e)}]"
    except Exception as e:
        return f"[Error leyendo archivo: {str(e)}]"

def main():
    # Directorio raíz del proyecto
    root_dir = Path(__file__).parent.parent
    output_file = root_dir / 'scripts' / 'resultados' / 'resultado_code_to_txt.txt'
    
    print(f"Directorio raíz del proyecto: {root_dir}")
    
    # Lista para almacenar el contenido final
    result = []
    
    # Contador para archivos procesados
    file_counter = 0
    skipped_counter = 0
    
    # Recorre todos los archivos en el directorio del proyecto
    print("Buscando archivos...")
    all_files = list(sorted(root_dir.glob('**/*')))
    print(f"Total de archivos encontrados: {len(all_files)}")
    
    for file_path in all_files:
        if file_path.is_file():
            # Verificar primero si el archivo está en node_modules (saltar rápidamente)
            if "node_modules" in str(file_path) or os.path.basename(file_path) == "package-lock.json":
                skipped_counter += 1
                continue
                
            if should_include_file(file_path):
                relative_path = file_path.relative_to(root_dir)
                
                # Agregar encabezado para este archivo
                result.append(f"\n\n{'=' * 80}")
                result.append(f"ARCHIVO: {relative_path}")
                result.append('=' * 80 + "\n")
                
                # Agregar contenido del archivo
                content = get_file_content(file_path)
                result.append(content)
                
                file_counter += 1
                if file_counter % 10 == 0:
                    print(f"Procesados {file_counter} archivos... (Saltados: {skipped_counter})")
    
    # Escribe el resultado en el archivo de salida
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("\n".join(result))
    
    print(f"Proceso completado. Total de archivos procesados: {file_counter} (Saltados: {skipped_counter})")
    print(f"Archivo generado correctamente: {output_file}")

if __name__ == "__main__":
    main() 