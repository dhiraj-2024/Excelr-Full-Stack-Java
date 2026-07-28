
class AnimalProperty {
    String Name;
    String Type;
    String Food;

    void  Sound(){
        System.out.println("Animal makes sound");
    };

    void Eat() {
        System.out.println(Name + " " + "eats a " + " " + Food);
    }

    void Type() {
        System.out.println(Name + " is a " + Type + "  Animal. " );
    }
}


class Dog extends AnimalProperty {

}

public class Animal {
    public static void main(String[] args) {
        Dog d1 = new Dog();
        d1.Name = "Bablu";
        d1.Food = "meat";
        d1.Type = "Friendly";
        System.out.println(d1.Name);
        d1.Eat();
        d1.Type();
    }
}
