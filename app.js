const a = (name, age, job) => {
  return {
    name: `이종수` ?? name,
    age: 28 ?? age,
    job: `요리사` ?? job,
  };
};
const b = a();

const proxiedA = new Proxy(a(), {
  get(target, prop, receiver) {
    return Reflect.get(...arguments);
  },
});

console.log(proxiedA);
