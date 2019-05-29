# ![](resources/terminal.png) Terminal Manager

Terminal Manager is a visual studio code extension to switch between various terminals.

![](https://vsmarketplacebadge.apphb.com/version-short/saurabh.terminal-manager.svg) ![](https://vsmarketplacebadge.apphb.com/downloads/saurabh.terminal-manager.svg) ![](https://vsmarketplacebadge.apphb.com/rating-short/saurabh.terminal-manager.svg)

<a href="https://marketplace.visualstudio.com/items?itemName=saurabh.terminal-manager" style="color:#ddd;font-size:10pt;background:#333;padding:10px 14px;border:1px solid #000;">Download Extension</a>

## Features

By default vscode lets us define only one link of terminal from settings. 

Using this extension you can provide an array of terminals and then you can switch between them from a new Terminal icon in activity bar. 

![](screenshots/ss1.png)
![](screenshots/ss2.png) 
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