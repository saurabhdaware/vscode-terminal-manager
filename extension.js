// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
let terminals = [
	{
		label:'Ubuntu',
		shellPath:"C:\\Windows\\System32\\bash.exe"
	},
	{
		label:'Windows',
		shellPath:'C:\\Windows\\System32\\cmd.exe'
	},
	{
		label:'Windows Powershell',
		shellPath:'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe'
	},
	{
		label:'Git Bash',
		shellPath:'F:\\Git\\bin\\bash.exe'
	}
];

terminals = terminals.map(terminal => {
	terminal.command = 'extension.'+terminal.label.toLowerCase().replace(/ /g,'');
	terminal.commandTitle = terminal.label;
	return terminal;
})
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

class TerminalTree{
	constructor(){
		this.i = -1;
		console.log("Terminal Treeee");
		console.log(JSON.stringify(terminals));
	}
	getChildren(element){
		console.log("Children Element"+JSON.stringify(element))
		return terminals;
	}

	getTreeItem(element){
		console.log("Item Element"+JSON.stringify(element))
		this.i++;
		let terminal = terminals[this.i];
		return {
			label:terminal.label,
			tooltip:`Open ${terminal.label}`,
			command:{command:terminal.command,title:terminal.commandTitle}
		}
	}

	getParent(element){
		console.log("Parent Element"+JSON.stringify(element))
		return 'd';
	}
}

function activate(context) {
	vscode.window.createTreeView('terminal-manager', {treeDataProvider:  new TerminalTree()});
	vscode.window.showInformationMessage('Congratulations, your extension "terminal-manager" is now active!');
	for(let terminal of terminals){
		let cmd = vscode.commands.registerCommand(terminal.command, function () {
			let terminalInstance = vscode.window.createTerminal(terminal.commandTitle,terminal.shellPath);
			terminalInstance.show();
		});
		context.subscriptions.push(cmd);
	}
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
