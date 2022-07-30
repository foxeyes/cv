export default /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Sova</title>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>🦊</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <style>{{CSS}}</style>
</head>
<body>
  <section>
    <col-css>
      <header>
        <div fox></div>
        <div>
          <h1>Sergey Matiyasevich</h1>
          <h2>a.k.a. Alex Sova</h2>
          <h3>Full-stack web developer</h3>
          <h3>R&D engineer / Solution architect</h3>
          <h3>Jamstack + web-components enthusiast</h3>
        </div>
      </header>
      {{CONTENT}}
      <div>&nbsp;</div>
    </col-css>
  </section>
  <section pulse>
    <col-css>
      <h2>-^v- Pulse</h2>
      {{PULSE}}
      <div>&nbsp;</div>
    </col-css>
  </section>
</body>
</html>
`;