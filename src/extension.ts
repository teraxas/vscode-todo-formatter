'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    vscode.languages.registerDocumentFormattingEditProvider('todo-lang', {
        provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
            let todoList = `\n$ Updated on ${new Date().toISOString()}`
            let todoListLines = document.getText()
                .split(/\r?\n/)
                .filter(v => v.trim().length > 2 && !v.startsWith('$'))
                .map(l => {
                    if (!l.startsWith('[]') && !l.startsWith('[*]')) {
                        return '[] ' + l;
                    } else {
                        return l;
                    }
                });

            const doneLines = todoListLines
                .filter(l => l.startsWith('[*]'))
                .sort();
            todoListLines = todoListLines
                .filter(l => l.startsWith('[]'))
                .sort();
            todoListLines.push(...doneLines);

            const doneCount = doneLines.length;
            todoList += `\n$ Done: ${doneCount}, Todo: ${todoListLines.length - doneCount}, Total: ${todoListLines.length}`;
            todoList += `\n$ ==================================================`
            todoList += '\n\n' + todoListLines.join('\n');
            todoList += `\n\n$ ==================================================\n`

            var firstLine = document.lineAt(0);
            var lastLine = document.lineAt(document.lineCount - 1);
            var textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
            return [
                vscode.TextEdit.replace(textRange, todoList)
            ];
        }
    });
}


