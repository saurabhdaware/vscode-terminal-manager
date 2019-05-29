// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

// This is supperr hacky way of creating Trees I got no fking clue how to use it in real.
class TerminalTree{
	constructor(terminals){
		this.terminals = terminals;
		this.i = -1;
	}
	getChildren(element){
		console.log(element);
		return this.terminals;
	}

	getTreeItem(element){
		console.log(element);
		this.i++;
		let terminal = this.terminals[this.i];
		return {
			label:terminal.label,
			tooltip:`Open ${terminal.label}`,
			command:{command:terminal.command,title:terminal.commandTitle}
		}
	}

	getParent(element){
		console.log(element);
		return 'd';
	}
}

function getTerminals(context){
	let terminals;
	try{
		terminals = JSON.parse(fs.readFileSync(context.globalStoragePath+'/terminals.json'));
		console.log(terminals);
		terminals = terminals.map(terminal => {
			terminal.command = 'extension.'+terminal.label.toLowerCase().replace(/ /g,'');
			terminal.commandTitle = terminal.label;
			return terminal;
		})
	}catch(e){
		fs.promises.mkdir(context.globalStoragePath,{recursive:true})
			.then(() => {
				return fs.promises.writeFile(context.globalStoragePath+'/terminals.json','[]')
			})
			.catch((e) => {
				console.log(e);
			})
		
		terminals = [];
	}

	return terminals;
}

function loadTerminals(context){
	let terminals = getTerminals(context);
	// vscode.workspace.onDidChangeTextDocument()
	let tree = vscode.window.createTreeView('terminal-manager', {treeDataProvider:  new TerminalTree(terminals)});

	context.subscriptions.push(tree);
	// vscode.window.showInformationMessage('Congratulations, your extension "terminal-manager" is now active!');
	for(let terminal of terminals){
		let cmd = vscode.commands.registerCommand(terminal.command, function () {
			let terminalInstance = vscode.window.createTerminal(terminal.commandTitle,terminal.shellPath);
			terminalInstance.show();
		});
		context.subscriptions.push(cmd);
	}
}

function loadCommands(context){
	let helloWorld = vscode.commands.registerCommand('extension.helloWorld',function(){
		vscode.window.showInformationMessage("Hello Boiii!");
	})
	context.subscriptions.push(helloWorld);

	let editTerminals = vscode.commands.registerCommand('extension.editTerminals',function(){
		let terminalsJsonPath = context.globalStoragePath+'/terminals.json';
		vscode.window.showTextDocument(vscode.Uri.parse("file:///"+terminalsJsonPath))
			.catch(console.log);
	})
	context.subscriptions.push(editTerminals);
}

function activate(context) {
	loadTerminals(context);
	loadCommands(context);

	fs.watchFile(context.globalStoragePath+'//terminals.json',function(event){
		console.log(event);
		for(let disposable of context.subscriptions){
			disposable.dispose();
		}
		// tree.dispose();
		loadTerminals(context);
		loadCommands(context);
	})
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
