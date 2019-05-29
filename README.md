# ![](resources/terminal.png) Terminal Manager

Terminal Manager is a visual studio code extension to switch between various terminals.

## Features

By default vscode lets us define only one link of terminal from settings. 

Using this extension you can provide an array of terminals and then you can switch between them from a new Terminal icon in activity bar. 

![](screenshots/ss1.png)


## Extension Settings

Click the edit icon ![](resources/edit.png) in Terminal Manager activity bar to edit the terminal settings. 

Here's what sample terminals.json looks like.
```json
[
    {
        "label":"Windows",
        "shellPath":"C://Windows//System32//cmd.exe"
    },
    {
        "label":"Ubuntu",
        "shellPath":"C://Windows//System32//bash.exe"
    }
]
```

## Contribution
- Check for the issues on https://github.com/saurabhdaware/vscode-terminal-manager/issues
- Fork the project
- Make your changes and make Pull Request to Master branch of [My Github Repository](https://github.com/saurabhdaware/vscode-terminal-manager)


## Release Notes

### 1.0.0

Initial release of Terminal Manager


----
Dont forget to star my github repository : https://github.com/saurabhdaware/vscode-terminal-manager