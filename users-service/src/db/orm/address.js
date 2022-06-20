export const findOneAddress = async(conditions) => {
    return Address.findOne( conditions ).then(function(address) {
        return !!address;
      }).catch(function(err){
        console.log(err);
      });
    }