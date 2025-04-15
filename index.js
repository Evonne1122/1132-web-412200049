function openiframe(index) {
  const c = document.getElementsByClassName('center')[0];
  console.log(c);
  switch (index) {
    case 1:
      c.innerHTML = '<iframe src = "0225.html" frameborder="1"></iframe>';
      break;
    case 2:
      c.innerHTML = '<iframe src = "W04/0311.html" frameborder="1"></iframe>';
      break;
    case 3:
      c.innerHTML = '<iframe src = "W05/0318.html" frameborder="1"></iframe>';
      break;
    case 4:
      c.innerHTML =
        '<iframe src = "mid_hw/midhw2.html" frameborder="1"></iframe>';
      break;
  }
  console.log(index);
}
