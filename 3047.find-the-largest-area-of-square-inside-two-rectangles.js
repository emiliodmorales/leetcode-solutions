/*
 * @lc app=leetcode id=3047 lang=javascript
 *
 * [3047] Find the Largest Area of Square Inside Two Rectangles
 */

// @lc code=start

/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
var largestSquareArea = function (bottomLeft, topRight) {};

// ----------------------------------------------------

/**
 * Create a shape using the bottomLeft and topRight coordinates
 * @param {number} bottom
 * @param {number} left
 * @param {number} top
 * @param {number} right
 * @return {Shape} - a shape with the child function area()
 */
function Shape(a, b, c, d) {
  return {
    a: a,
    b: b,
    c: c,
    d: d,
    area: function () {
      return (this.c - this.a) * (this.d - this.b);
    },
  };
}

// ----------------------------------------------------

/**
 * TODO
 */
function largestSquareArea(bottomLeft, topRight) {
  // TODO
}

// ----------------------------------------------------
// @lc code=end
