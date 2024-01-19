// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import childProcess from 'child_process';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "awesome-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('awesome-extension.runPythonCommand', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInputBox({
			placeHolder: "Please input python command",
		}).then((command) => {
			// Using childProcess.exec to execute a Python command
			childProcess.exec(`python ${command}`, (error, stdout) => {
				// Check if there is an error during execution
				if (error) {
					// Display an error message in the VS Code window
					vscode.window.showErrorMessage(`Exec error: ${error}`);
				} else {
					// Display an information message in the VS Code window with the output
					vscode.window.showInformationMessage(`Exec error: ${stdout}`);
				}
			});
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
