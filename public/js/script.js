const getTools = async () => {
    fetch('http://127.0.0.1:3001/tools/get',
        {
            method: "GET",
        }
    ).then(response => response.json())
        .then(data => {
            console.log(data)
            data.results.map(result => {
                $('.tools').append(`   
                     
                    <div class="tool">
                        <a class="tool-link" href="analytics.html?id=${result.id}">
                            <img class="tool-image" src="img/cпектр.png" alt="">
                                <p class="title">Спектрофотометр Varian, Inc Cary 50 Bio</p>
                        </a>
                        <div class="state-block">
                            <select name="tool-select">
                                <option value="available">Свободен</option>
                                <option value="taken">Занят</option>
                            </select>
                            <img class="bell-image" src="img/bell-1.png" alt="">
                        </div>
                    </div>
               `);
            })
            $('.tool').last().css('border-bottom', 'none')
        })
        .catch((err) => {
            console.log(err)
            console.log("An error occured while fetching.")
        })
};

getTools()

const filter = (input) => {
  input = input.toLowerCase()

  $('.tool').map(i => {
    let tool_title = $('.tool .title').eq(i).text().toLowerCase()

    if (tool_title.includes(input)) {
      $('.tool').eq(i).css('display', 'flex');
    } else {
      $('.tool').eq(i).css('display', 'none');
    }
  })
}

$( "#search-input" ).bind('input', function() {
  filter($(this).val())
});