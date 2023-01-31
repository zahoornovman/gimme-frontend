let date = new Date
let day = date.getDate()
let month = date.getMonth() + 1
let hour = date.getHours()

function Error() {
  return (
    <div>
      {
        hour < 12
          ?
          <h1>Good morning!</h1>
          :
          hour < 17
            ?
            <h1>Good afternoon!</h1>
            :
            hour < 22
              ?
              <h1>Good evening!</h1>
              :
              <h1>Good night!</h1>
      }
      <div>Sorry, this page doesn't exist.</div>
      <div>😝</div>
      <button>Go back to previous page.</button>
    </div>
  );
}

export default Error;