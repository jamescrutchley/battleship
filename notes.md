## Battleship Project via the Odin Project as part of the 'Unit Testing' module.

Development Notes:

    (setup)
    - cloned webpack starter repo I've used previously.
    - Initial issue with the config - 'config.output.module should be boolean'...

    -No error msg when 'module' is made a property of module.exports on the same level as 'output', rather than nested under 'output'.

    - install jest, babel, babel-jest, @babel/preset-env

    - can succesfully test javascript files in src.     
        - test compiled code(?)

    - move test files into separate folder
    
    (app)
    - Create Ship factory
    - test ship object methods

    -Create Gameboard factory
    -Create 'generateGrid' func for gameboard's grid prop.
        -test generategrid returns an array as intended
    
    -Create test series for 'receieveAttack' method
        - registers hit and calls hit method on correct ship,
            correctly updates grid.
        - registers miss and correctly updates grid.

        - Difficulty using 'beforeEach' hook --
            set up objects in the describe block instead.

    -Create tests for 'checkAllSunk' method.
        - ongoing condition - return false
        - game over condition - return true

