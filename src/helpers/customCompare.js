export default function customCompare(a, b){
  try {
    return a.range.from - b.range.from;
  }
  catch (e) {
    return 0;
  } 
}