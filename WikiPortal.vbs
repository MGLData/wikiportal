Option Explicit

Dim URL, WshShell, i

URL = "\\Ssnetapp1\trans\MGLData\WikiPortal\dictionary.html"

Set WshShell = CreateObject("WScript.shell")

For i = 0 to 50
    WshShell.SendKeys(chr(175))
Next

WshShell.run "CMD /C start firefox.exe " & URL & "", 0, False