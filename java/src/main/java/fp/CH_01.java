package fp;

public class CH_01 {

    public static int increment(int x) {
        return x + 1;
    }

    public static String concatenate(String a, String b) {
        return a + b;
    }

    public static int calculateScore(String word) {
        int score = 0;
        for (char c : word.toCharArray()) {
            if (c != 'a') {
                score++;
            }
        }
        return score;
    }

    public static int wordScore(String word) {
        return word.replace("a", "").length();
    }

    public static String stringWithoutChar(String s, char c) {
        return s.replace(Character.toString(c), "");
    }

    public static int _wordScore(String word) {
        return stringWithoutChar(word, 'a').length();
    }
}
