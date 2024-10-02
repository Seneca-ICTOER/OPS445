---
id: reference-sheet
title: Reference Sheet
sidebar_position: 5
description: Reference Sheet For Acceptable Code For Assessments
---

# OPS445 Reference Sheet For Assessments

- _Note_: words in (these) indicate a thing you will have to write, the parentheses are **not** part of the syntax.
- _Note_: variable placeholders will use **x**, **y**, and so on.

## First Quiz

### Shebang

```python
#!/usr/bin/env python3
```

### Built-in Functions

- `help()`
- `type()`
- `print()`
- `input()`
- `int()`
- `str()`
- `float()`
- `len()`

### Conditions

```python
if (condition):
    (action1)
elif (condition2):
    (action2)
else:
    (action)
```

### Loops

```python
while (condition1):
    (action)
    if (condition2):
        break
```

```python
for x in y:
    (action)
```

### Command Line Arguments

```python
import sys

sys.argv
```

### Import Keywords

- `from (module) import (something)`
- `import (module) as (alias)`

### Comparison Operators

Col 1 | Col 2
--- | ---
&lt; | &gt;
&lt;= | &gt;=
== | !=

### Logical Operators

- `and`
- `or`
- `not`

### Math Operators

Col 1 | Col 2
--- | ---
+ | -
* | **
/ | //
+= | -=
*= | /=
% | 

### Boolean Keywords

- `True`
- `False`
- `None`

---

## Second Quiz

### Functions

```python
def func_name(x='Default value'):
    return y
```

### Main Block

```python
if __name__ == "__main__":
```

### Shell Commands

```python
os.system('x')
os.popen('x').read()
p = subprocess.Popen(['x'], stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE, shell=True)
s = p.communicate()
s[0].decode('utf-8')
```

### Lists

```python
x = []
x.append(x)
x.insert(x, y)
x.remove(x)
x.sort()
x.pop()

y in x
```


### Tuples

```python
x = (y, )
x = (y, z)
```

### Sets

```python
x = {x, y}
x.add(x)
```

```python
x = {}
y = {}
x & y
x - y
x ^ y
x | y
```

### Dictionaries

```python
x = {y: z, a: b}
x[y] = z

x.keys()
x.values()
x.items()
```

### Slicing

```python
x = 'PYTHON'
x[:z]
x[y:]
x[y:z]
```

### Strings

- `upper()`
- `lower()`
- `strip()`
- `split()`
- `join()`
- `center()`
- `replace()`
- `startswith()`


