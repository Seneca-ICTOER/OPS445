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
- `round()`

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

```python
for i in range(x, y):
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

#### Combinations

Method 1 | Method 2
---------|---------
`x & y` | `x.intersection(y)`
`x - y` | `x.difference(y)`
`x ^ y` | `x.symmetric_difference(y)`
<code>x &#124; y</code> | `x.union(y)`


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
- `capitalize()`
- `swapcase()`
- `title()`
- `strip()`
- `split()`
- `join()`
- `center()`
- `replace()`
- `startswith()`

---

## Third Quiz

### File Operations

```python
f = open(filename, operation_flag)
```

#### File Object Methods

- `read`
- `write`
- `readline`
- `readlines`
- `close`

### Exception Handling

```python
try:
    ...
except (error1, error2):
    ...
except error3:
    ...
except:
    ...
```

#### Common Exceptions

- `NameError`
- `SyntaxError`
- `IndexError`
- `ValueError`
- `FileNotFoundError`
- `KeyError`

---

## Fourth Quiz

### F-Strings

```python
print(f'Hello World')
x = 'John'
print(f'Hello {x}')

y = 3
print(f'Formatted: {y:02d} minutes.')
```

### Classes

```python
class Name:

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def method(self):
        ...


n1 = Name(x, y)
```

### Magic Methods

```python
class Name:

    def __eq__(self, other):
        return self == other

```

### Equality Operators

- `__eq__`
- `__ne__`
- `__gt__`
- `__lt__`
- `__ge__`
- `__le__`

### Math Operators

- `__add__`
- `__sub__`
- `__mul__`
- `__truediv__`
- `__mod__`
- `__floordiv__`
- `__pow__`

### Other Dunders

- `__len__`
- `__str__`
- `__repr__`

## Fifth Quiz

### Ansible Ad-Hoc

`ansible remote_machine_id [-i inventory] [--private-key id_rsa] [-u remote_user] -a 'date'`

### Playbooks

```ansible
- hosts: 
  user: 
  become: 
  vars:
  tasks:
    - name: 
      yum: name= state=
    
    - name: 
      service: 
        name: 
        state: 

    - name:  
      copy:
        dest: 
        src:
        owner:
        group:
        mode:

    - name:
      user:
        name:
        comment:
        group:
        append:
```