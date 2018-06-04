import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      { id: 123, title: 'what', body: 'lsdfjl', created: '1231231' },
      { id: 124, title: 'HOW NOW BIG TITLE', body: 'lsdfjl', created: '1231231' },
    ];
   }
});
