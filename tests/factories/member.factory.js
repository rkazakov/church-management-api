import faker from 'faker';

class MemberFactory {
  generateList(count, attrs = {}) {
    let list = [];
    while(count) {
      list.push(this.generate(attrs));
      count--;
    }
    return list;
  }

  generate(attrs) {
    return Object.assign({}, {
      text: faker.lorem.sentence()
    }, attrs);
  }
}

export default new MemberFactory();
