class Animal {
    public void animalSound() {
        System.out.println("the animal makes sound ");
    }
    
}

class Dog extends Animal {

    public void animalSound() {
        super.animalSound();
        System.out.println("Dogs make sound like bowww bowww");
    }
    

}

public class SuperK {
    public static void main(String[] args) {

        // Animal obj1 = new Animal();
        // obj1.animalSound();
        Dog obj2 = new Dog();
        obj2.animalSound();
        
}
}
