$(() => {
    $(".addBurger").on("click", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var id = $(this).data("id")
    
        const newBurger = {
          burger_name: $("#newBurgers").val().trim(),
          devoured: 0
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(() => {
          // Reload the page to get the updated list
          location.reload();
        });
      });
    
    $(".devourBurger").on("click", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        const id = $(this).data("id")
        console.log(id);

        const eatBurger = {
            devoured: 1
        };
        // Send the POST request.
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: eatBurger
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
})