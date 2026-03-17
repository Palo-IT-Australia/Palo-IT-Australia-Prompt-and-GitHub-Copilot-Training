/**
 * Exercise 3 — Refactoring with Copilot Chat
 * =============================================
 * Objective: Use Copilot Chat to refactor legacy-style code into modern, readable TypeScript.
 *
 * Instructions:
 * 1. Read the "before" code below
 * 2. Select all of it and open Copilot Chat (Ctrl+Shift+I / Cmd+Shift+I)
 * 3. Use the prompts suggested in the comments to ask Copilot to refactor
 * 4. Compare the output with the original and note what improved
 *
 * Suggested prompts (try each in order):
 *   a) "Refactor this JavaScript-style code to idiomatic TypeScript.
 *       Add proper type annotations, interfaces, and use modern ES features."
 *   b) "Now refactor the fetchUserOrders function to use async/await instead of
 *       nested callbacks. Keep the same behaviour and error handling."
 *   c) "The code has no error handling for network failures in fetchUserOrders.
 *       Add appropriate error handling with typed custom errors."
 */


// ============================================================
// BEFORE — legacy-style code to refactor
// ============================================================

var BASE_URL = 'https://api.example.com';

function getUser(id, callback) {
  fetch(BASE_URL + '/users/' + id)
    .then(function(response) {
      if (!response.ok) {
        callback(new Error('Failed to fetch user: ' + response.status), null);
        return;
      }
      return response.json();
    })
    .then(function(data) {
      callback(null, data);
    })
    .catch(function(err) {
      callback(err, null);
    });
}

function formatUserName(user) {
  if (!user) return '';
  var first = user.firstName ? user.firstName : '';
  var last = user.lastName ? user.lastName : '';
  return (first + ' ' + last).trim();
}

function fetchUserOrders(userId, callback) {
  getUser(userId, function(err, user) {
    if (err) {
      callback(err, null);
      return;
    }
    fetch(BASE_URL + '/orders?userId=' + userId)
      .then(function(response) {
        return response.json();
      })
      .then(function(orders) {
        var result = {
          user: formatUserName(user),
          email: user.email,
          orderCount: orders.length,
          totalSpent: orders.reduce(function(sum, order) {
            return sum + order.amount;
          }, 0),
        };
        callback(null, result);
      })
      .catch(function(err) {
        callback(err, null);
      });
  });
}

// ============================================================
// Use Copilot Chat to produce a refactored version below
// ============================================================

// Your refactored TypeScript code goes here...
