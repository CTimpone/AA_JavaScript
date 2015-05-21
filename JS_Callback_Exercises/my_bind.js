Function.prototype.my_bind = function (context)
{
  var fn = this;

  return function () {
    fn.apply(context);
  }
};
