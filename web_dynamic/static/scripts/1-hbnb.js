// Wait for the DOM to be fully loaded
$(document).ready(function () {
    // Dictionary to store checked amenities
    var checkedAmenities = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        // If the checkbox is checked, add the Amenity ID to the dictionary
        if ($(this).prop('checked')) {
            checkedAmenities[amenityId] = amenityName;
        } else {
            // If the checkbox is unchecked, remove the Amenity ID from the dictionary
            delete checkedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of checked Amenities
        var amenitiesList = Object.values(checkedAmenities).join(', ');
        $('.filters .amenities h4').text('Amenities: ' + amenitiesList);
    });
});
