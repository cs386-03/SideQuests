function get_new_id( id_array ) {
    var max_id = 0;
    for ( let index = 0; index < id_array.length; index++ ) {
        if ( id_array[index] > max_id ) {
            max_id = id_array[index];
        }
    }

    console.log("New ID created");

    return max_id + 1;
}

module.exports = get_new_id;