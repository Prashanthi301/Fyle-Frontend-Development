<form (ngSubmit)="onSubmit()" style="background-color: #f7f7f7; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
  <label style="color: #337ab7;">Username:</label>
  <input type="text" [(ngModel)]="username" name="username" required style="width: 200px; padding: 10px; border: 1px solid #ddd;"><br><br>
  <label style="color: #337ab7;">Workout Type:</label>
  <select [(ngModel)]="workoutType" name="workoutType" required style="width: 200px; padding: 10px; border: 1px solid #ddd;">
    <option value="Running">Running</option>
    <option value="Cycling">Cycling</option>
    <option value="Swimming">Swimming</option>
  </select><br><br>
  <label style="color: #337ab7;">Workout Minutes:</label>
  <input type="number" [(ngModel)]="workoutMinutes" name="workoutMinutes" required style="width: 200px; padding: 10px; border: 1px solid #ddd;"><br><br>
  <button type="submit" style="background-color: #337ab7; color: #ffffff; padding: 10px 20px; border: none; border-radius: 5px;">Add Workout</button>
</form>
