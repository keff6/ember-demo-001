import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return $.get("cars.json");
    },
    actions:{
        storeTheCars: function(bears){
            $.post('/api/cars', cars);
        }
    }
});
