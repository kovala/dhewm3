#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

int sum(const std::initializer_list<int>& list) {
  int total = 0;
  for (auto& e : list) {
    total += e;
  }
  return total;
}

auto asKey(const std::string_view& str) { std::cout << "asKey: " << str << std::endl; }

int main() {
  asKey("hello");
  asKey("world");

  std::unordered_map<std::string, int> m = {
    {"a", 1},
    {"b", 2},
    {"c", 3},
  };
  for (const auto& [key, value] : m) {
    printf("key: %s, value: %d\n", key.c_str(), value);
  }

  std::vector<int> v = {1, 2, 3};
  int total = sum({1, 2, 3});
  printf("Total: %d\n", total);
  return 0;
}
