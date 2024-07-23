    
  
    static class JuniorDeveloper extends BaseDeveloper implements QuickLearner {
        String favoriteLanguage;
        boolean fluentInEnglish;

        JuniorDeveloper(String name, String favoriteLanguage, boolean fluentInEnglish) {
            super(name);
            this.favoriteLanguage = favoriteLanguage;
            this.fluentInEnglish = fluentInEnglish;
        }

        @Override
        void introduce() {
            System.out.println("안녕하세요. " + name + "입니다.");
            System.out.println("코딩할 때는 " + favoriteLanguage + ", 대화할 때는 영어, 둘 다 제가 좋아하는 언어입니다!");
        }

        @Override
        public void learnQuickly() {
            System.out.println(name + "adapts quickly to new environments and learns with passion");
        }
    }
    public static void main(String[] args) {
        JuniorDeveloper developer = new JuniorDeveloper("유지아", "Java", true);
        developer.introduce();
        developer.writeCode();
        developer.debugCode();
    }
