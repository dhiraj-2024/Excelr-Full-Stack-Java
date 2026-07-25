

class Students {
static String college = "MET";
private String name ;
private int id ;

// Getter methods

public int getId (){
    return id;
}
public String getName(){
    return name;
}

// Setter methods 

public void setId(int id){
    this.id = id;
}
public void setName(String name){
    this.name = name;
}

}


class Test{
    public static void main(String[] args){
        Students s = new Students();
        s.setId(101);
        s.setName("Dhiraj");

        System.out.println(s.getId());
        System.out.println(s.getName());
        // System.out.println(s.college);
    }
}