async function commentRateFormHandler(event) {
  event.preventDefault();

  //will have to change this to reflect the part of the comment body
  const comment_text = document.querySelector('textarea[name="comment-section"]').value.trim();

  //will have to change this to reflect the part of the rating body
  const rating = document.querySelector('#rating-id').value.trim();
  const game_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text && rating) {
    const response = await fetch('api/commentrates', {
      method: 'POST',
      body: JSON.stringify({
        comment_text,
        rating,
        game_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

//change this to the div for comments
document.querySelector('.comment-page').addEventListener('submit', commentRateFormHandler);
