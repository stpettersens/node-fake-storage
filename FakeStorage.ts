/*
  FakeStorage simulates the browser's Storage object.

  Copyright 2015 Sam Saint-Pettersen.
  Released under the MIT License.
*/

class Storage {

    private static keys = new Array<string>();
    private static vals = new Array<string>();

    // Return number of stored items.
    // FakeStorage uses count property instead of length
    // due to technical restraint of not being able to redefine
    // the length property on a static object.
    // See: https://github.com/Microsoft/TypeScript/issues/442
    public static get count(): number {
        return Storage.keys.length;
    }

    // Set an item (same as native Storage object).
    public static setItem(key: string, value: string): void {
        Storage.keys.push(key);
        Storage.vals.push(value);
    }

    // Get an item (value at key; same as native Storage object).
    public static getItem(key: string): string {
        var index: number = Storage.keys.indexOf(key);
        var result: string = null;
        if(Storage.keys.indexOf(key) != -1) {
            result = Storage.vals[index];
        }
        return result;
    }

    // Remove an item (same as native Storage object).
    public static removeItem(key: string): void {
        console.log(Storage.getItems());
        var index: number = Storage.keys.indexOf(key);
        if(Storage.keys.indexOf(key) != -1) {
            Storage.keys.splice(index, 1);
            Storage.vals.splice(index, 1);
        }
    }

    // Clear all stored items (same as native Storage object).
    public static clear(): void {
        Storage.keys = [];
        Storage.vals = [];
    }

    // Get an item key at specified index (same as native Storage object).
    public static key(index: number): string {
        var result: string = null;
        if(Storage.keys[index] != null) {
          result = Storage.keys[index];
        }
        return result;
    }

    // Return all items in storage.
    // AFAIK native Storage does not do this;
    // so really just a convience method.
    public static getItems(): string[] {
        var pairs = new Array<string>();
        for(var i: number = 0; i < Storage.keys.length; i++) {
          pairs.push(Storage.keys[i] + '=>' + Storage.vals[i]);
        }
        return pairs;
    }
}
export = Storage;
