import re
from pathlib import Path

path = Path('data.ts')
code = path.read_text(encoding='utf-8')

pattern = re.compile(r'"text": "([^"\\]*(?:\\.[^"\\]*)*)"')

def repl(m):
    content = m.group(1)
    # すでに \u200F で囲まれている場合は何もしない
    if content.startswith('\\u200F') and content.endswith('\\u200F'):
        return f'"text": "{content}"'
    return '"text": "\\u200F' + content + '\\u200F"'

new_code = pattern.sub(repl, code)

path.write_text(new_code, encoding='utf-8')
