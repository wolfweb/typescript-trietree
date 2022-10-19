export interface ITrieNode {
  isWord: boolean;
  parent: ITrieNode | null;
  value: string | null,
  child: Record<string, ITrieNode | undefined>;
}

export class Trie {
  private root : ITrieNode;
  constructor(){
    this.root = this.trie(null, null);
  }

  public insert = (str: string) => this.doInsert(this.root, str, 0);
  
  public search(str: string): ITrieNode | null {
    for(var i=0; i < str.length; i++){
      const char = str[i];
      if(this.root.child[char]){
        str = str.slice(i);
        break;
      }
    }
    return this.doSearch(this.root, str, 0);
  }

  public remove(key: string | undefined): ITrieNode | undefined {
    return this.doRemove(this.root, key);
  }

  private doInsert(itr: ITrieNode, str: string, i: number) {
    if (i < str.length) {
      const char = str[i];
      const node = (itr.child[char] ||= this.trie(itr, char));
      this.doInsert(node, str, i + 1);
    } else {
      itr.isWord = true;
    }
  }

  private doRemove(tri: ITrieNode, key: string | undefined): ITrieNode | undefined {
    if (!key) {
      if (tri.isWord) { tri.isWord = false; }
      return;
    }
  
    const node = tri.child[key[0]];
    node && this.doRemove(node, key.substring(1));
  }

  private doSearch(tri: ITrieNode | undefined, str: string, i: number): ITrieNode | null {
    if (tri) {
      if (tri.isWord) {
        return tri;
      }
      return this.doSearch(tri.child[str[i]], str, i + 1);
    }

    if(i<str.length){
      return this.doSearch(this.root, str.slice(1), 0);
    }

    return null;
  }

  private trie = (parent: ITrieNode | null, value: string | null): ITrieNode => ({ isWord: false, child: {}, parent, value });
}