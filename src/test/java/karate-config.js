function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  karate.configure('retry', { count: 3, interval: 1000 });
  karate.log('3 deneme 1sn bekleme istek');
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    getUri: 'https://jsonplaceholder.typicode.com/todos',
    postUri: 'https://reqres.in/api'
  }
  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
      karate.log('karate.env system property was:', env);
  }
  return config;
}
