#### fake-storage
Node.js module to simulate the browser's Storage object (e.g. localStorage).

Use from JavaScript:

    var localStorage = require('fake-storage');
    localStorage.setItem('my_key', 'my_value');
    localStorage.getItem('my_key'); ==> 'myvalue'
    localStorage.key(0); ==> 'my_key'

Use from [TypeScript](http://www.typescriptlang.org):

    /// <require path="typings/fake-storage.d.ts" />
     
    import localStorage = require('fake-storage');
    localStorage.setItem('my_key', 'my_value');
    localStorage.getItem('my_key'); ==> 'myvalue'
    localStorage.key(0); ==> 'my_key'

Methods:

**Storage.setItem(key: string, value: string): void**

Add an key-value pair to Storage.
