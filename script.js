const SumOfList = class{
  constructor(child, parent, total){
    this.$child = $(child);
    this.$parent = $(parent);
    this.$total = $(total);
    this.initEvents();
    this.calcTotal();
  }

  initEvents(){
    this.$child.on('click',(e)=>{
      this.appendItem(e);
      this.calcTotal();
    })
  }

  appendItem(e){
    const $clickedItem = $(e.currentTarget);
    const $clickedParent = $clickedItem.parent();
    const clickedLeftList = $clickedParent.is(this.$parent.first());

    if (clickedLeftList) {
      this.$parent.last().append($clickedItem);
    } else {
      this.$parent.first().append($clickedItem);
    }
  }

  calcTotal(){
    this.$parent.each((index, parent)=>{
        const $children = $(parent).find(this.$child);
        let total = 0;
        $children.text((index, text)=>{
            if (isNaN(parseInt(text))) return;
            total += parseInt(text);
        });
        $(parent).next().find(this.$total).text(total);
    })
  }
}

new SumOfList('li','.js-list', ".js-total");