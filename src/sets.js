remove(Element) {
    if (this.has(Element)) {
      delete this.itens[Element];
      return true;
    }
    return false;
  }
  clear () {
    this.itens = {};
  }

  values(){
    return Object.values(this.itens);
  }
