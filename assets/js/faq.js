$(document).ready(function () {
  const BASE_URL = "https://api.indianmentors.in/api";
  // const BASE_URL = "http://localhost:8000/api"

  let $FAQ_DIV = $("#FaqItemsWrapper");

  // change bar verification status
  url = BASE_URL + "/master/faq/";
  $.ajax({
    url: url,
    type: "GET",
    data: null,
    processData: false,
    contentType: false,
    success: function (response) {
      faq_title_list = response.faq_list;
      for (var i = 0; i < faq_title_list.length; i++) {
        col_div_id = "que_" + i.toString();

        html_str = `
        
        <div class="accordion-item  border-0">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#${col_div_id}" aria-expanded="false"
            aria-controls="${col_div_id} d-flex">
            <div> <strong class="pe-2">Que.</strong></div>
            <div>${faq_title_list[i].question}</div>
          </button>
        </h2>
        <div id="${col_div_id}" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body d-flex">
            <div>
              <strong class="pe-2">Ans.</strong>
            </div>
            <div>${faq_title_list[i].answer} </div>
          </div>
        </div>
      </div>`;
        $FAQ_DIV.append(html_str);
      }
    },
    error: function () {},
  });
});
