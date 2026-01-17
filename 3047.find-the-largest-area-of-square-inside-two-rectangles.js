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

/**
 * TODO
 */
function measureSquareIntersectionArea(shape1, shape2) {
  const a_intersect = Math.max(shape1.a, shape2.a);
  const b_intersect = Math.max(shape1.b, shape2.b);
  const c_intersect = Math.min(shape1.c, shape2.c);
  const d_intersect = Math.min(shape1.d, shape2.d);

  const intersection = Shape(
    a_intersect,
    b_intersect,
    c_intersect,
    d_intersect,
  );
  return findLargestSquare(intersection).area();
}

// ----------------------------------------------------

/**
 * TODO
 */
function findLargestSquare(shape) {
  const squareSideLength = Math.min(shape.c - shape.a, shape.d - shape.b);
  return Shape(
    shape.a,
    shape.b,
    shape.a + squareSideLength,
    shape.b + squareSideLength,
  );
}

// ----------------------------------------------------
// @lc code=end
