# TODO formatter

I wanted to have a really simple way to write "todo" lists, that would work seemlessly in VSCode or Terminals.

Best way to use it is by enabling "Format on save" option.

* This extension formats `*.todo` files as in example below.
* All items are sorted by "done" status and alphabetically.
* If a row has no 'checkbox' (`[]` or `[*]`), it is added automatically.

```
$ Updated on 2020-05-29T07:36:43.248Z
$ Done: 1, Todo: 4, Total: 5
$ ==================================================

[] Item 1
[] Item 2
[] Item 3
[] Item 4
[*] Item 5

$ ==================================================

```