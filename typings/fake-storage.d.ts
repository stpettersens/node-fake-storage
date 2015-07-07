// Type definitions for fake-storage
// Project: https://github.com/stpettersens/node-fake-storage
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "fake-storage" {
	// count property - TODO
	export function setItem(key: string, value: any): number;
	export function getItem(key: string): string;
	export function removeItem(key: string): void;
	export function clear(): void;
	export function key(index: number): string;
	export function getItems(): string[];
}
