var APIConsumer = require( "./APIConsumer" );

// initialize jQuery API consumer.
$( function () {

	var $doc = $( document ), consumer;

	/**
	 * Create the APIConsumer
	 */
	consumer = new APIConsumer();

	/* ---- API HOOKS ---- */

	/**
	 * When we load defaults, reset the UI with new renderers corresponding to this data
	 */
	$doc.on( "defaults-loaded", function ( event, data ) {
		consumer.log( "Defaults were loaded successfully" );

		consumer.setData( data );
	} );

	/**
	 * When a room is updated, locate the renderer (e.g. .room-name.center-hall) and provide updated data
	 */
	$doc.on( "room-updated", function ( event, name, room ) {
		consumer.log( "Room " + name + " was updated successfully" );

		consumer.updateRoom( $( ".room-template." + name ), name, room );
	} );

	/**
	 * When a zone is updated, locate the renderer (e.g. .zone-name.east-wing) and provide updated data
	 */
	$doc.on( "zone-updated", function ( event, name, zone ) {
		consumer.log( "Zone " + name + " was updated successfully" );

		consumer.updateZone( $( ".zone-template." + name ), name, zone );
	} );

} );