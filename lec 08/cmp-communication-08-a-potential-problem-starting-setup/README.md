# Providing and Injecting

######  _Props & CustomEvents_ **should be Default comunication mechanism** more than _provide & inject_
- Consider using _provide & inject_ when I have some pass through components

### Notes:

- We can only inject what is has been provided on a heigher up level.**(Parent -> Child)**

  - appview **'Provide**'-_'Parent'_ -> knowledge-base -> knowledge-grid **"inject"**
  - Can't comuicate between neighbours

- ['104'] Conect using customEvent(Provide, inject) insted of emits
