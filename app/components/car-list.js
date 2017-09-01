import Ember from 'ember';

export default Ember.Component.extend({
    cars:[],
    actions: {
        addCar: function(){
            let carName = this.get("carName");
            this.get("cars").pushObject(carName);
        },
        saveCars: function(){
            this.sendAction('action',this.get("cars"));
        }
    }
    
});
