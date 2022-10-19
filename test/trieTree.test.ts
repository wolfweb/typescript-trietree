import { describe, test, expect } from "@jest/globals";

import { Trie } from '../src/';

const trie = new Trie();
describe('trie test', ()=>{
  test('trie add', ()=>{
    trie.insert('hello');
    expect(trie.search('hello')).not.toBeNull();
  });

  test('trie remove', ()=> {
    trie.remove('hello');
    expect(trie.search('hello')).toBeNull();
  });

  test('trie search', ()=>{
    trie.insert('hello');
    expect(trie.search('test for hello world')).not.toBeNull();
  });
});