Template.progressIndicator.helpers({
    progressColor: function (){
      var value = Session.get('currentState') + 1;

      if(value === 0){
        return false;
      }
      else{
        //console.log(this.id + " compared To "+ value);

        if(this.id < value){
          return 'complete'
        }
        else if(this.id === value){
          if(this.id === 4){
            return 'complete';
          }
          return 'inProgress'
        }
        else{
          return '';
        }
      }
      console.log(this);
    }
});