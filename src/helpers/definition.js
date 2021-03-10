function get_days(year, month) {
  //月の最大に数を取得
  return new Date(year, month, 0).getDate();
}
function genereate() {
  //西暦を設定
  const nengoes = [];
  for (let y = 2030; y > 1980; y--) {
    if (y > 2018) {
      nengoes.unshift({ year: y, label: `${y} (令和${y - 2018}年)` });
    } else if (y > 1988) {
      nengoes.unshift({ year: y, label: `${y} (平成${y - 1988}年)` });
    } else if (y > 1925) {
      nengoes.unshift({ year: y, label: `${y} (昭和${y - 1925}年)` });
    }
  }
  return nengoes;
}

export default {
  get_days,
  genereate,
};
